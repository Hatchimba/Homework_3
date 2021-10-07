import { Component, OnInit } from '@angular/core';
import { MemberService } from '../_services/member.service'; 

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss']
})
export class MembersTableComponent implements OnInit {

  members = [
    {
      name_of_the_dish: "",
      price: "",
      created_date: "",
      modified_date:""
    },
    
  ]

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.memberService.getMenu().subscribe((data) =>{
      this.members =data;
    })
  }

}

