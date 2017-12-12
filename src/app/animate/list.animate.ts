import {trigger,state,transition,style,animate,query,stagger} from '@angular/animations';

export const listAnimation = trigger('listAnimate',[
    transition('*=>*',[
        query(':enter',style({opacity:0}), { optional: true }),
        query(':enter',stagger(100,[
            animate('0.5s',style({opacity:1}))
        ]), { optional: true }),
        query(':leave',style({opacity:1}), { optional: true }),
        query(':leave',stagger(100,[
            animate('0.5s',style({opacity:0}))
        ]), { optional: true }),
    ])
])
