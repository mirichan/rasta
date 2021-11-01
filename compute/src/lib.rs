mod utils;

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
pub fn get_buffer(width: u32, height: u32, row0: u32, rows: u32) -> Vec<u8> {
    (row0..(row0 + rows))
        .rev()
        .into_iter()
        .flat_map(|y| {
            (0..width).into_iter().flat_map(move |x| {
                let xu8 = x as u8 % 255;
                let yu8 = y as u8 % 255;
                vec![255, xu8, yu8, 255]
            })
        })
        .collect()
}
