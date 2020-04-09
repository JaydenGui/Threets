function main() {
    var gl = getWebGLContext('canvas-container');

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT); // ?

    var program = createProgram(gl);
    gl.program = program;
    gl.useProgram(program);

    uploadData(gl);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
}
main();

function getWebGLContext(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('webgl');
    return context;
}

function uploadData(gl) {
    var data = new Float32Array([
        0.0, 0.0, 0.4, 0.0, 0.0, 0.3
    ]);

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    return buffer;
}



function createProgram(gl) {
    var vertexShader = createShader(gl, 'attribute vec4 a_Position; void main() {gl_Position = a_Position; gl_PointSize = 5.0;}', gl.VERTEX_SHADER);
    var fragmentShader = createShader(gl, 'void main() {gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);}', gl.FRAGMENT_SHADER);

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    return program;
}

function createShader(gl, source, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}