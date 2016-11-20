
#############################################################################
# 					O W N    F U N C T I O N S								#
############################################################################# 


# creates global log object
# @param name the name of the logger
# @param level level of logging e.g. logging.DEBUG
# @author Emanuel Regnath
def setupLogging(self, level):
    global log
    scriptName = sys.argv[0]
    log = logging.getLogger(scriptName)
    log.setLevel(level)

    formatter = logging.Formatter('[%(levelname)s] %(message)s')

    sh = logging.StreamHandler()
    sh.setLevel(level)
    sh.setFormatter(formatter)
    log.addHandler(sh)

    fh = logging.FileHandler(scriptName+".log")
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(formatter)
    log.addHandler(fh)



def readInputFile( fileName ): 
    sourceFile = open(fileName,'r')   # Open file as file object and read to string
    sourceText = sourceFile.read()    # Read file object to string
    sourceFile.close()                # Close file object
    return sourceText


def writeOutputFile( fileName, text ):
    outputFile = open(fileName, 'w+')  # Open file as file object and read to string
    outputFile.write(text)             # Read file object to string
    outputFile.close()                 # Close file object


mapping = { 
    '<':'\lt', '>':'\gt', 
    'α':r'\alpha', 'Α':r'\Alpha', 'β':r'\beta',
    'γ':r'\gamma', 'Γ':r'\alpha', 'δ':r'\dlpha', 'Δ':r'\Delta',
    'ε':r'\epsilon', 'ζ':r'\zeta', 'η':r'\eta', 
    'θ':r'\theta', 'Θ':r'\Theta',
    'κ':r'\kappa', 'λ':r'\lambda', 'Λ':r'\Lambda',
    'μ':r'\mu', 'ν':r'\nu', 'ξ':r'\xi', 'Ξ':r'\Xi',
    'π':r'\pi', 'Π':r'\Pi',
    'ρ':r'\rho', 'σ':r'\sigma', 'Σ':r'\Sigma', 'τ':r'\tau',
    'ω':r'\omega', 'Ω':r'\Omega' }



def escapeKaTeX(text):
    matches = re.findall('\$+([^$]+?)\$+', text)
    for match in matches:
        block = match
        for k, v in mapping.items():
            block = block.replace(k, v)
        text = text.replace(match, block)
    return text


def inlineSvg( text, dirname ):
    #matches = re.findall('(!\[[^]]+\]\((\S+\.svg).*\))', text)
    matches = re.findall('(<img src="([^"]+?\.svg)"[^<]*>)', text)
    for match in matches:
        block = match[0]
        imageCode = readInputFile( dirname + '/' + match[1] )  
        text = text.replace(match[0], imageCode)
    return text


def parseAbbreviation(text):
    """Parse the given text into metadata and strip it for a Markdown parser.
    :param text: text to be parsed
    """
    rv = {}
    match = ABBREVIATION.findall(text)
    for m in match:
        line = m[0]
        key = m[1]
        value = m[2]
        #print key + ", " + value
        text = re.sub(re.escape(line), '', text)
        text = re.sub('(?<=\s|:|\()'+re.escape(key)+'(?=\s|.|\))', '<abbr title="' + value + '" >' + key + '</abbr>', text)
    return text



def translateFile( root, file ):
    fileName = os.path.join(root, file)

    # template html string
    fullHtml="""<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
    <header></header>

    <main></main>

    <footer></footer>
</body>
"""

    # prepare main content
    mainMd = readInputFile(fileName)

    # abbreviations
    mainMd = readInputFile('./parser_util/abbreviations.md') + '\n' + mainMd
    mainMd = parseAbbreviation(mainMd)

    # additional tex definitions
    mainMd = readInputFile('./parser_util/tex_definitions.md') + '\n' + mainMd
    mainMd = escapeKaTeX(mainMd)

    # translate with pandoc
    mainHtml = Popen(['pandoc', '--wrap=preserve', 
                                '--columns=300',
                                '--latexmathml', 
                                '-f',
                                'markdown+latex_macros+implicit_figures', 
                                '-t',
                                'html5'], stdin=PIPE, stdout=PIPE).communicate(mainMd.encode('utf8'))[0].decode("utf-8", "strict") 

    # main
    mainText = '<main class="container">\n' + mainHtml + '\n</main>'
    mainIndent = "        "
    mainText = mainIndent + re.sub('\n^[ \t]*', '\n'+mainIndent, mainText, re.MULTILINE) 
    fullHtml = fullHtml.replace('<main></main>', mainText)
    
    # head
    headText = readInputFile("./parser_util/head.html")
    fullHtml = fullHtml.replace('<head></head>', headText)

    # header
    headerText = readInputFile("./parser_util/header.html")
    fullHtml = fullHtml.replace('<header></header>', headerText)

    # footer
    footerText = readInputFile("./parser_util/footer.html")
    fullHtml = fullHtml.replace('<footer></footer>', footerText)


    # write output
    outputFileName = './pages/' + re.sub('\.md', '.html', file)
    writeOutputFile(outputFileName, fullHtml)




#############################################################################
#					M A I N   P R O G R A M									#
#############################################################################

# imports
import logging
import fileinput
import sys
import os
import re
from subprocess import Popen, PIPE, check_output


ABBREVIATION= re.compile(r'(\*\[([^\]]+)\]:\s*([^\n]+\n))')


setupLogging(1, logging.DEBUG)

log.info("Starting Conversion")

# check arguments
args = sys.argv[1:]
if len(args) == 0:
    for root, dirs, files in os.walk("./raw"):
        for file in files:
            if file.endswith(".md"):
                log.info("Reading File: "+file)
                translateFile(root, file)

    sys.exit(0)


