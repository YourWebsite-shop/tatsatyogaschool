declare module 'aos' {
    interface AosOptions {
      duration?: number;
      offset?: number;
      delay?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    export default class AOS {
      static init(options?: AosOptions): void;
      static refresh(): void;
      static refreshHard(): void;
    }
  }
  