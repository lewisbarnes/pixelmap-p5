class RenderHelper {
    
    static RENDER_MODE_RGB = 0;
    static RENDER_MODE_GS = 1;
    static RENDER_MODE_ASCII = 2;
    
    static CHARS = `   $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-+~<>i!lI;:,"^'.`;
    
    static rgb_to_ascii(rgb)
    {
        let gs = this.rgb_to_gs(rgb);
        let char_index = this.#scale_num(gs, 0, 255, this.CHARS.length-1, 0);
        return this.CHARS.charAt(floor(char_index));
    }
    
    static rgb_to_gs(rgb)
    {
        return floor((0.299 * rgb[0]) + (0.587 * rgb[1]) + (0.114 * rgb[2]));
    }

    static #scale_num(num, in_min, in_max, out_min, out_max)
    {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}