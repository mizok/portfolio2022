const fragmentShader = require('./glsl/fragment.glsl');
const vertexShader = require('./glsl/vertex.glsl');
import { Scene, PerspectiveCamera, WebGLRenderer, PlaneGeometry, Mesh, Color, RawShaderMaterial, MeshBasicMaterial, DoubleSide, Clock } from 'three';

export class BannerAnimation {
    private scene!: Scene;
    private renderer!: WebGLRenderer;
    private camera!: PerspectiveCamera;
    private plane!: Mesh;
    private rect !: DOMRect;
    private mat!: RawShaderMaterial;
    private clock!: Clock;
    constructor(private element: HTMLElement) {
        this.init()
    }

    init() {
        this.initRenderEnv();
        this.initPlane();
        this.sizing();
        this.tick(this.clock.getElapsedTime());
    }
    initRenderEnv() {
        this.clock = new Clock();
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
        this.camera.position.z = 2.5;
        this.scene.add(this.camera);
        this.element.append(this.renderer.domElement);
        this.sizing();
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
        if (!!this.plane) {
            this.planeFitPerspectiveCamera();
        }

    }
    initPlane() {
        const geo = new PlaneGeometry(1, 2, 50, 50);
        this.mat = new RawShaderMaterial({
            vertexShader: vertexShader.default,
            fragmentShader: fragmentShader.default,
            uniforms:
            {
                uFrequency: { value: 10 }
            }
        });

        this.plane = new Mesh(geo, this.mat);
        this.scene.add(this.plane);
    }

    planeFitPerspectiveCamera(relativeZ = null) {
        const cameraZ = relativeZ !== null ? relativeZ : this.camera.position.z;
        const distance = cameraZ - this.plane.position.z;
        const vFov = this.camera.fov * Math.PI / 180;
        const scaleY = 2 * Math.tan(vFov / 2) * distance;
        const scaleX = scaleY * this.camera.aspect;

        this.plane.scale.set(scaleX, scaleY, 1);
    }

    tick(time: number) {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(
            () => {
                this.mat.uniforms['uFrequency'].value = time * 4
                this.tick(this.clock.getElapsedTime())
            }
        );
    }

}