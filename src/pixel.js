

class Pixel 
{
    constructor(x, y, scale, color){
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
    }
    
    render_rgb()
    {
        fill(this.color);
        rect(this.x, this.y, this.scale, this.scale);
    }
    
    render_gs()
    {
        fill(RenderHelper.rgb_to_gs(this.color));
        rect(this.x, this.y, this.scale, this.scale);
    }
    
    render_ascii() 
    {
        textFont('Courier');
        textSize(this.scale);
        textAlign(LEFT,TOP);
        fill(255);
        text(RenderHelper.rgb_to_ascii(this.color), this.x, this.y);
    }
    
    get_ascii() 
    {
        return RenderHelper.rgb_to_ascii(this.color);
    }
}