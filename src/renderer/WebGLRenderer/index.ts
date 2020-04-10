import { projectObjects } from './projectObjects';
import { setProgram } from './setProgram';
import { setVertexAttribute } from './setVertexAttribute';

export class WebGLRenderer {

    render() {
        projectObjects();

        this.renderObjects();
    }

    renderObjects() {
        this.renderObject();
    }

    renderObject() {
        setProgram();
        setVertexAttribute();
    }

}