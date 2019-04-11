'use strict';

const path = require('path');
// const CanvasEchart = require('canvas');
const { createCanvas, loadImage } = require('canvas');
const echarts = require('echarts');
const fs = require('fs');

module.exports = {
    generateImage (options, savePath, size) {
        return new Promise((resolve, reject) => {
            const canvas = createCanvas(400, 200);
            const ctx = canvas.getContext('2d');
            ctx.font = '12px 楷体';
            echarts.setCanvasCreator(function () {
                return canvas;
            });
            const chart = echarts.init(canvas);
            options.animation = false;
            options.textStyle = {
                fontFamily: '楷体',
                fontSize: 12,
            };
            chart.setOption(options);
            try {
                fs.writeFileSync(savePath, chart.getDom().toBuffer());
                console.log("Create Img:" + savePath);
            } catch (err){
                console.error("Error: Write File failed" + err.message);
            }
            resolve();
        })
    }
};
