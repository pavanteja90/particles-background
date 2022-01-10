import { Component } from '@angular/core';
import { PARTICLES_CONFIG_2 } from "../assets/particles.config";

declare let particlesJS: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	ngOnInit(): void {
		this.invokeParticles();
	}

	private invokeParticles(): void {
		particlesJS('particles-js', PARTICLES_CONFIG_2, undefined);
	}

	openUrl(url: string) {
		window.open(url);
	}
}
