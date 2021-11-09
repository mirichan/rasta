mod color;
mod image;
mod utils;

use crate::image::Image;
use color::Color;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn init() {
    utils::init();
}

#[wasm_bindgen]
pub fn get_buffer(width: usize, height: usize, row0: usize, rows: usize) -> Vec<u8> {
    // (row0..(row0 + rows))
    //     .rev()
    //     .into_iter()
    //     .flat_map(|y| {
    //         (0..width).into_iter().flat_map(move |x| {
    //             let xu8 = x as u8 % 255;
    //             let yu8 = y as u8 % 255;
    //             vec![255, xu8, yu8, 255]
    //         })
    //     })
    //     .collect()
    let mut image = Image::new(width, rows, Color::BLACK);

    image.set(0, 0, Color::RED);
    image.line(0, 0, width - 1, height - 1, Color::GREEN);
    image.line(width - 1, 0, 0, height - 1, Color::GREEN);
    image.line(
        width / 4,
        height / 4,
        width / 4,
        height / 4 * 3,
        Color::BLUE,
    );
    image.line(
        width / 4,
        height / 4 * 3,
        width / 4 * 3,
        height / 4 * 3,
        Color::BLUE,
    );
    image.line(
        width / 4 * 3,
        height / 4 * 3,
        width / 4 * 3,
        height / 4,
        Color::BLUE,
    );
    image.line(
        width / 4 * 3,
        height / 4,
        width / 4,
        height / 4,
        Color::BLUE,
    );
    image.to_rgba_bytes()
}
