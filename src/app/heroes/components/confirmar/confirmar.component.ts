import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public data:Heroe) { }
               //Estamos leyendo quien sea que llame el dialogo  y almacena la data en el Heroe

  ngOnInit(): void {
    console.log(this.data);
  }

  borrar(){
    this.dialogRef.close(true); // regresa true
  }

  cerrar(){
    this.dialogRef.close();  // undefined
  }
}
