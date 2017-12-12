import { NgModule } from '@angular/core';
import {EffectsModule} from '@ngrx/effects'
import { QuoteEffects } from './quote.effect';

@NgModule({
    imports: [ EffectsModule.run(QuoteEffects) ],
})
export class AppEffectsModule {}