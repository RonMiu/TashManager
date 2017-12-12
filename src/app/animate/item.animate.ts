import {trigger,state,transition,style,animate} from '@angular/animations';

export const itemAnim = trigger('item',[
    state('out',style({'border-left-width':'3px'})),
    state('hover',style({'border-left-width':'5px'})),
    transition('out=>hover',animate('150ms ease-in')),
    transition('hover=>out',animate('150ms ease-out')),
])

// export const itemAnim = trigger('item',[
//     state('out',style({'transform':'scale(1)'})),
//     state('hover',style({'transform':'scale(1.05)'})),
//     transition('out=>hover',animate('200ms ease-in')),
//     transition('hover=>out',animate('200ms ease-out')),
// ])
