import { Directive } from './directives';
import { PetiteVueImports } from './types';
export declare const createApp: (imports: PetiteVueImports, initialData?: any) => {
    directive(name: string, def?: Directive<Element> | undefined): Directive<Element> | any;
    mount(el?: string | Element | null | undefined): any | undefined;
    unmount(): void;
};
