# -*- coding: utf-8 -*-

import logging
import sys
import os
import re
from subprocess import Popen, PIPE


#############################################################################
# 					O W N    F U N C T I O N S								#
#############################################################################


# creates global log object
# @param name the name of the logger
# @param level level of logging e.g. logging.DEBUG
# @author Emanuel Regnath
def setup_logging(self, level):
    global log
    script_name = sys.argv[0]
    log = logging.getLogger(script_name)
    log.setLevel(level)

    formatter = logging.Formatter('[%(levelname)s] %(message)s')

    sh = logging.StreamHandler()
    sh.setLevel(level)
    sh.setFormatter(formatter)
    log.addHandler(sh)

    fh = logging.FileHandler(script_name + ".log")
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(formatter)
    log.addHandler(fh)


def read_input_file(file_name):
    source_file = open(file_name, 'r')  # Open file as file object and read to string
    source_text = source_file.read()  # Read file object to string
    source_file.close()  # Close file object
    return source_text


def write_output_file(file_name, text):
    output_file = open(file_name, 'w+')  # Open file as file object and read to string
    output_file.write(text)  # Read file object to string
    output_file.close()  # Close file object


mapping = {
    '<': '\lt', '>': '\gt',
    'α': r'\alpha', 'Α': r'\Alpha', 'β': r'\beta',
    'γ': r'\gamma', 'Γ': r'\alpha', 'δ': r'\dlpha', 'Δ': r'\Delta',
    'ε': r'\epsilon', 'ζ': r'\zeta', 'η': r'\eta',
    'θ': r'\theta', 'Θ': r'\Theta',
    'κ': r'\kappa', 'λ': r'\lambda', 'Λ': r'\Lambda',
    'μ': r'\mu', 'ν': r'\nu', 'ξ': r'\xi', 'Ξ': r'\Xi',
    'π': r'\pi', 'Π': r'\Pi',
    'ρ': r'\rho', 'σ': r'\sigma', 'Σ': r'\Sigma', 'τ': r'\tau',
    'ω': r'\omega', 'Ω': r'\Omega'}


def escape_katex(text):
    matches = re.findall('\$+([^$]+?)\$+', text)
    for match in matches:
        block = match
        for k, v in mapping.items():
            block = block.replace(k, v)
        text = text.replace(match, block)
    return text


def inline_svg(text, dirname):
    # matches = re.findall('(!\[[^]]+\]\((\S+\.svg).*\))', text)
    matches = re.findall('(<img src="([^"]+?\.svg)"[^<]*>)', text)
    for match in matches:
        block = match[0]
        image_code = read_input_file(dirname + '/' + match[1])
        text = text.replace(match[0], image_code)
    return text


def parse_abbreviation(text):
    """Parse the given text into metadata and strip it for a Markdown parser.
    :param text: text to be parsed
    """
    rv = {}
    match = ABBREVIATION.findall(text)
    for m in match:
        line = m[0]
        key = m[1]
        value = m[2]
        # print key + ", " + value
        text = re.sub(re.escape(line), '', text)
        text = re.sub('(?<=\s|:|\()' + re.escape(key) + '(?=\s|.|\))',
                      '<abbr title="' + value + '" >' + key + '</abbr>', text)
    return text


def translate_file(root, file):
    file_name = os.path.join(root, file)

    # template html string
    full_html = """<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
    <header></header>

    <main></main>

    <footer></footer>
</body>
"""

    # prepare main content
    main_md = read_input_file(file_name)

    # abbreviations
    main_md = read_input_file('./parser_util/abbreviations.md') + '\n' + main_md
    main_md = parse_abbreviation(main_md)

    # additional tex definitions
    main_md = read_input_file('./parser_util/tex_definitions.md') + '\n' + main_md
    main_md = escape_katex(main_md)

    # translate with pandoc
    main_html = Popen(['pandoc', '--wrap=preserve',
                       '--columns=300',
                       '--latexmathml',
                       '-f',
                       'markdown+latex_macros+implicit_figures',
                       '-t',
                       'html5'], stdin=PIPE, stdout=PIPE).communicate(
        main_md.encode('utf8'))[0].decode("utf-8", "strict")

    # main
    main_text = '<main class="container">\n' + main_html + '\n</main>'
    main_indent = "        "
    main_text = main_indent + re.sub('\n^[ \t]*', '\n' + main_indent, main_text, re.MULTILINE)
    full_html = full_html.replace('<main></main>', main_text)

    # head
    head_text = read_input_file("./parser_util/head.html")
    full_html = full_html.replace('<head></head>', head_text)

    # header
    header_text = read_input_file("./parser_util/header.html")
    full_html = full_html.replace('<header></header>', header_text)

    # footer
    footer_text = read_input_file("./parser_util/footer.html")
    full_html = full_html.replace('<footer></footer>', footer_text)

    # write output
    output_file_name = './pages/' + re.sub('\.md', '.html', file)
    write_output_file(output_file_name, full_html)


#############################################################################
#					M A I N   P R O G R A M									#
#############################################################################

ABBREVIATION = re.compile(r'(\*\[([^\]]+)\]:\s*([^\n]+\n))')

if __name__ == "__main__":
    setup_logging(1, logging.DEBUG)

    log.info("Starting Conversion")

    # check arguments
    args = sys.argv[1:]
    if len(args) == 0:
        for root, dirs, files in os.walk("./raw"):
            for file in files:
                if file.endswith(".md"):
                    log.info("Reading File: " + file)
                    translate_file(root, file)

        sys.exit(0)
