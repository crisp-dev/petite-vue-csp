import { Reactive } from '@vue/reactivity';
import { effect, stop } from '@vue/reactivity';
import { remove } from '@vue/shared';
export interface PetiteVueImports {
    reactive: Reactive<any>;
    effect: typeof effect;
    remove: typeof remove;
    stop: typeof stop;
}
