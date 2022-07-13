

class PixelMap {
    constructor(lines) {
        this.pixels = [];
        this.colors = {};
        this.pixel_scale = 20;
        this.lines = lines;
        this.process_lines();
    }
    
    process_lines() {
        for(let i = 0; i < this.lines.length; i++) 
        {
            let line = this.lines[i];
            if(line.startsWith(':')) 
            {
                let section = line.replace(':','');
                if(section == 'map')
                {
                    i = this.process_map(i+1);
                }
                else if(section == 'colors') 
                {
                    i = this.process_colors(i+1);
                }
            }
        }
        return this.lines.length-1;
    }
    
    process_map(line_start) {
        for(let i = line_start; i < this.lines.length; i++) 
        {
            if(this.lines[i].startsWith(':')) 
            {
                return i - 1;
            }
            else {
                let pixel_row = [];
                let row = this.lines[i].split(' ');
                for(let j = 0; j < row.length; j++) 
                {
                    pixel_row.push(new Pixel((j * this.pixel_scale),
                    ((i - line_start) * this.pixel_scale),
                    this.pixel_scale,
                    this.colors[row[j].trim()]));
                }
                this.pixels.push(pixel_row);
            }
        }
        return this.lines.length-1;
    }
    
    process_colors(line_start) 
    {
        for(let i = line_start; i < this.lines.length; i++) 
        {
            if(this.lines[i].startsWith(':')) 
            {
                return i - 1;
            }
            else
            {
                let color_tag = this.lines[i].replace(',','').split(' ');
                this.colors[color_tag[0]] = color_tag.slice(1,color_tag.length).map(x => parseInt(x));
            }
        }
        return this.lines.length-1;
    }
    
    get_canvas_dimensions() 
    {
        return [this.pixels[0].length * this.pixel_scale, this.pixels.length * this.pixel_scale];
    }
    
    get_mouse_cell() 
    {
        let x = (mouseX - (mouseX % this.pixel_scale)) / this.pixel_scale;
        let y = (mouseY - (mouseY % this.pixel_scale)) / this.pixel_scale;
        
        return { x: x, y: y };
    }
    
    valid_mouse_pos()
    {    
        let msxy = this.get_mouse_cell();
        
        if(msxy.y > this.pixels.length-1|| msxy.y < 0) 
        {
            return { x: -1, y: -1 };
        }
        
        if(msxy.x > this.pixels[0].length-1 || msxy.x < 0) 
        {
            return { x: -1, y: -1 };
        }
        
        return msxy;
    }
    
    render(render_mode) 
    {
        if(render_mode == undefined)
        {
            render_mode = RenderHelper.RENDER_MODE_RGB;
        }
        
        for(let row of this.pixels)
        {
            for(let pixel of row) 
            {

                if(render_mode === RenderHelper.RENDER_MODE_RGB) 
                {
                    pixel.render_rgb();
                }
                else if(render_mode === RenderHelper.RENDER_MODE_GS) 
                {
                    pixel.render_gs();
                }
                else if(render_mode === RenderHelper.RENDER_MODE_ASCII) 
                {
                    pixel.render_ascii();
                }
            }
        }
    }
}