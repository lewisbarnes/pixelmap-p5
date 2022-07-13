# pixelmap-p5
pixelmap-p5 is a text-based image render utilising p5.js

### Rendering Modes
pixelmap-p5 can render in full RGB, Grayscale or ASCII

### File Format
.pixelmap files are composed of sections each starting with a heading preceded by `:`.

For example to denote colors for use in rendering, a section must be created starting with `:colors`.
On the lines below colors are denoted using the identifier of your choice followed by a space then
the RGB color representation seperated by spaces e.g. `aa 255 255 255`.

To specify the layout of the 'pixelmap' a section headed `:map` must be created.
This follows a row-column grid format using identifiers specified in the `:colors` section.
Each identifier is followed by a space. Dimensions are unbounded, however specifying a large
number of rows and columns may overflow your page. 

### Example .pixelmap File
    :colors
    aa 255 255 255
    ab 209 0 0
    ac 92 64 20
    ad 224 176 99
    ae 28 50 128
    af 245 251 56
    ag 0 0 0
    :map
    aa aa aa aa aa aa aa aa aa aa aa aa aa aa
    aa aa aa aa ab ab ab ab ab aa aa aa aa aa
    aa aa aa ab ab ab ab ab ab ab ab ab aa aa
    aa aa aa ac ac ac ad ad ag ad ad aa aa aa
    aa aa ac ad ac ad ad ad ag ad ad ad aa aa
    aa aa ac ad ac ac ad ad ad ac ad ad ad aa
    aa aa ac ac ad ad ad ad ac ac ac ac aa aa
    aa aa aa aa ad ad ad ad ad ad ad aa aa aa
    aa aa aa ab ab ae ab ab ab aa aa aa aa aa
    aa aa ab ab ab ae ab ab ae ab ab ab aa aa
    aa ab ab ab ab ae ae ae ae ab ab ab ab aa
    aa ad ad ab ae af ae ae af ae ab ad ad aa
    aa ad ad ad ae ae ae ae ae ae ad ad ad aa
    aa ad ad ae ae ae ae ae ae ae ae ad ad aa
    aa aa aa ae ae ae aa aa ae ae ae aa aa aa
    aa aa ac ac ac aa aa aa aa ac ac ac aa aa
    aa ac ac ac ac aa aa aa aa ac ac ac ac aa
    aa aa aa aa aa aa aa aa aa aa aa aa aa aa
