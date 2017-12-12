import {trigger,state,transition,style,animate} from '@angular/animations';

export const cardAnim = trigger('card',[
    state('out',style({'transform':'scale(1)'})),
    state('hover',style({'transform':'scale(1.05)'})),
    transition('out=>hover',animate('200ms ease-in')),
    transition('hover=>out',animate('200ms ease-out')),
])
