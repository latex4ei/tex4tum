import numpy as np

from bokeh.layouts import column, row
from bokeh.models import *
from bokeh.resources import CDN
from bokeh.plotting import ColumnDataSource, figure, output_file, show, save

x = np.linspace(-2, 6, 400)
y = np.sin(3.1415 * x)

source = ColumnDataSource(data=dict(x=x, y=y))
T = ColumnDataSource(data=dict(x=[0, 2], y=[2, 2]))  # T
P = ColumnDataSource(data=dict(x=[0, 0], y=[0, 0]))  # A
A = ColumnDataSource(
    data=dict(x=[T.data["x"][1] / 4, T.data["x"][1] / 4], y=[0, 1])
)  # A

plot = figure(y_range=(-3, 3), plot_width=400, plot_height=200)

plot.line("x", "y", source=source, line_width=3, line_alpha=0.6)


plot.xaxis[0].formatter = PrintfTickFormatter(format="%d π")


amp_slider = Slider(start=0.1, end=2.5, value=1, step=0.1, title="Amplitude")
freq_slider = Slider(start=0.4, end=4, value=1, step=0.1, title="Frequency")
phase_slider = Slider(start=-2, end=2, value=0, step=0.1, title="Phase")
offset_slider = Slider(start=-1, end=1, value=0, step=0.1, title="Offset")


plot.line("x", "y", source=T, line_width=2)
plot.line("x", "y", source=P, line_width=2)
plot.line("x", "y", source=A, line_width=2)
plot.cross("x", "y", source=T)
labels = LabelSet(x="x", y="y", text="names", source=T)

lT = Label(x=0.5, y=2.2, text="T = 1/f")
lEq = Label(x=-0.5, y=-2, text="y = A • sin( fx + φ )")  # , text_font_size='5px'
plot.add_layout(lT)
plot.add_layout(lEq)


callback = CustomJS(
    args=dict(
        source=source,
        Td=T,
        Ad=A,
        Pd=P,
        amp=amp_slider,
        freq=freq_slider,
        phase=phase_slider,
        offset=offset_slider,
    ),
    code="""
    const data = source.data;
    const A = amp.value;
    const k = freq.value;
    const phi = phase.value;
    const B = offset.value;
    const x = data['x']
    const y = data['y']
    for (var i = 0; i < x.length; i++) {
        y[i] = B + A*Math.sin(Math.PI*(k*x[i]+phi));
    }
    source.change.emit();
    Td.data['x'][1] = 2.0/freq.value;
    Td.change.emit();
    Pd.data['x'][1] = -phi/freq.value;
    Pd.change.emit();
    Ad.data['x'][0] = Ad.data['x'][1] = (0.5 - phi)/freq.value;
    Ad.data['y'][1] = A;
    Ad.change.emit();
""",
)

amp_slider.js_on_change("value", callback)
freq_slider.js_on_change("value", callback)
phase_slider.js_on_change("value", callback)
offset_slider.js_on_change("value", callback)

layout = row(
    plot,
    column(amp_slider, freq_slider, phase_slider, offset_slider),
)

save(layout, filename="slider.html", resources=CDN)


# print("CDN.js_files", CDN.js_files)
