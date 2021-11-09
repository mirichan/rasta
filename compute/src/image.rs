use crate::color::Color;

pub struct Image {
    pub(crate) data: Vec<Color>,
    pub(crate) width: usize,
    pub(crate) height: usize,
}

impl Image {
    pub(crate) fn new(width: usize, height: usize, color: Color) -> Image {
        Image {
            data: vec![color; width * height],
            width,
            height,
        }
    }

    pub(crate) fn set(&mut self, x: usize, y: usize, color: Color) {
        self.data[y * self.width + x] = color;
    }

    pub(crate) fn line(
        &mut self,
        mut x0: usize,
        mut y0: usize,
        mut x1: usize,
        mut y1: usize,
        color: Color,
    ) -> () {
        /*
                void line(int x0, int y0, int x1, int y1, TGAImage &image, TGAColor color) {
            bool steep = false;
            if (std::abs(x0-x1)<std::abs(y0-y1)) { // if the line is steep, we transpose the image
                std::swap(x0, y0);
                std::swap(x1, y1);
                steep = true;
            }
            if (x0>x1) { // make it left−to−right
                std::swap(x0, x1);
                std::swap(y0, y1);
            }
            for (int x=x0; x<=x1; x++) {
                float t = (x-x0)/(float)(x1-x0);
                int y = y0*(1.-t) + y1*t;
                if (steep) {
                    image.set(y, x, color); // if transposed, de−transpose
                } else {
                    image.set(x, y, color);
                }
            }
        }
                */
        let mut steep = false;
        if (x0 as i32 - x1 as i32).abs() < (y0 as i32 - y1 as i32).abs() {
            // if the line is steep, we transpose the image
            std::mem::swap(&mut x0, &mut y0);
            std::mem::swap(&mut x1, &mut y1);
            steep = true;
        }
        if x0 > x1 {
            // make it left−to−right
            std::mem::swap(&mut x0, &mut x1);
            std::mem::swap(&mut y0, &mut y1);
        }
        for x in x0..=x1 {
            let t = (x - x0) as f32 / (x1 - x0) as f32;
            let y = y0 as f32 * (1. - t) + y1 as f32 * t;
            if steep {
                self.set(y.round() as usize, x, color); // if transposed, de−transpose
            } else {
                self.set(x, y.round() as usize, color);
            }
        }
    }

    pub(crate) fn to_rgba_bytes(&self) -> Vec<u8> {
        self.data.iter().flat_map(|c| c.to_rgba_bytes()).collect()
    }
}
