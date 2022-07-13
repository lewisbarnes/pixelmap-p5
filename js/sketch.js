
let lines = [];

let selected_color = [0, 0, 0];

let RENDER_MODE = 0;

let pixelmap = {}

function preload() {
    loadStrings("pixelmaps/mario.pixelmap", (res) => {
        lines = res
    });
}

function setup() {

    pixelmap = new PixelMap(lines);
    let dimensions = pixelmap.get_canvas_dimensions();
    canvas = createCanvas(dimensions[0],dimensions[1]);
    canvas.parent("canvas-container");
    select("#mouse-pos-relative-display").html(`Mouse Pos Relative: 0, 0`);
    select("#mouse-pos-display").html(`Mouse Pos Absolute: 0, 0`);
}

function draw() {
    if(RENDER_MODE == RenderHelper.RENDER_MODE_ASCII) {
        background(0);
    }
    pixelmap.render(RENDER_MODE);
}


function keyPressed() {
    if(keyCode === LEFT_ARROW) {
        RENDER_MODE++;
        if(RENDER_MODE > RenderHelper.RENDER_MODE_ASCII) {
            RENDER_MODE = RenderHelper.RENDER_MODE_RGB;
        }
    }
    if(key == "c") {
        let msxy = pixelmap.valid_mouse_pos();
        if(msxy.x == -1) {
            return false;
        } 
        else {
            selected_color = pixelmap.pixels[msxy.y][msxy.x].color;
            select("#selected-color-display").html(`Selected Color: ${selected_color}`);
        }
    }
}

function mouseClicked() {
    let msxy = pixelmap.valid_mouse_pos();
    if(msxy.x == -1) {
        return false;
    } 
    else {
        pixelmap.pixels[msxy.y][msxy.x].color = selected_color;
    }
    
    return false;
}

function mouseMoved() {
    let msxy = pixelmap.valid_mouse_pos();
    if(msxy.x == -1) {
        return false;
    } else
    {
        select("#mouse-pos-relative-display").html(`Mouse Pos Relative: ${msxy.x}, ${msxy.y}`);
        select("#mouse-pos-display").html(`Mouse Pos Absolute: ${mouseX}, ${mouseY}`);
    }
    return false;
}

function mouseDragged() {
    let msxy = pixelmap.valid_mouse_pos();
    if(msxy.x == -1) {
        return false;
    } 
    else
    {
        pixelmap.pixels[msxy.y][msxy.x].color = selected_color;
    }

    return false;
}