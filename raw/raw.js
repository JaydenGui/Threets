function main() {
    var gl = getWebGLContext();

    var program = createProgram(gl);
    gl.program = program;
    gl.useProgram(program);

    gl.drawArrays(gl.TRIANGLE, 0, 3);
}
main();

function getWebGLContext(id) {
    var dom = document.getElementById(id);
    var context = dom.getWebGLContext();
    return context;
}

function uploadData(gl) {
    var data = new Float32Array([
        0, 0, 400, 0, 0, 300
    ]);

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ArrayElement, buffer);
    gl.bufferData(gl.ArrayElement, vertices, gl.static);

    return buffer;
}



function createProgram(gl) {
    var vertexShader = createShader(gl, '', gl.vertexShader);
    var fragmentShader = createShader(gl, '', gl.fragmentShader);

    var program = gl.createProgram();
    program.attachShader(program, vertexShader);
    program.attachShader(program, fragmentShader);

    program.linkShaders();

    return program;
}

function createShader(gl, source, type) {
    var shader = gl.createShader(type);
    shader.shaderSource(source);
    gl.compileShader(shader);
    return shader;
}