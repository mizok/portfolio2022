const fragmentShader = require('./glsl/fragment.glsl');
const vertexShader = require('./glsl/vertex.glsl');
import { Scene, PerspectiveCamera, WebGLRenderer, PlaneGeometry, Mesh, Color, RawShaderMaterial, MeshBasicMaterial } from 'three';

export class BannerAnimation {
    private scene!: Scene;
    private renderer!: WebGLRenderer;
    private camera!: PerspectiveCamera;
    private plane!: Mesh;
    private rect !: DOMRect;
    constructor(private element: HTMLElement) {
        this.init()
    }

    init() {
        this.initRenderEnv();
        this.initPlane();
        this.tick();
    }
    initRenderEnv() {
        this.rect = this.element.getBoundingClientRect();
        this.scene = new Scene();
        this.renderer = new WebGLRenderer({
            antialias: true
        });
        this.renderer.setClearColor(new Color(0, 0, 0));
        this.camera = new PerspectiveCamera(
            75,
            this.rect.width / this.rect.height,
            0.1,
            1000
        );
        this.camera.position.z = 5;
        this.scene.add(this.camera);
        this.sizing();
        this.element.append(this.renderer.domElement);
    }
    sizing() {
        this.rect = this.element.getBoundingClientRect();
        // Update camera
        this.camera.aspect = this.rect.width / this.rect.height
        this.camera.updateProjectionMatrix()
        // Update renderer
        this.renderer.setSize(this.rect.width, this.rect.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setViewport(0, 0, this.rect.width, this.rect.height);
    }
    initPlane() {
        const geo = new PlaneGeometry(10, 10, 1, 1);
        // const mat = new RawShaderMaterial({
        //     vertexShader: vertexShader.default,
        //     fragmentShader: fragmentShader.default
        // });
        const mat = new MeshBasicMaterial({
            color: new Color('red')
        })
        this.plane = new Mesh(geo, mat);
        this.plane.rotation.x = Math.PI / 2;
        this.scene.add(this.plane);
    }

    tick() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(
            () => {
                this.tick()
            }
        );
    }

}