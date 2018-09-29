import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.page.html',
  styleUrls: ['./list-example.page.scss'],
})
export class ListExamplePage implements OnInit {

    private summits = [
        ['Nebo', 11929],
        ['Olympus', 9026],
        ['Timpangos', 11752],
        ['Lone Peak', 11253],
        ['Cascade', 10908],
        ['Box Elder', 11101],
        ['Twin Peaks', 11329],
        ['Pfeifferhorn', 11325 ],
        ['White Baldy', 11321]
    ];

    public items: Array<{ title: string; elevation: string; icon: string }> = [];

    constructor() {
        let i: number;
        i = 0;
        for (const entry of this.summits) {
            i++;
            this.items.push({
                title: entry[0].toString(),
                elevation: entry[1].toString(),
                icon: 'compass'
            });
        }
    }

    showGreeting(name: string) {
        console.log(name);
    }



    ngOnInit() {
    }

}
