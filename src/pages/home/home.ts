import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControlName, Validators } from "@angular/forms";


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// AngularFireList, AngularFireObject 

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  pessoasRef: AngularFireList<any>;
  pessoas: Observable<any[]>;
  editPessoaForm: FormGroup;
  isEditVisible = false;
  pessoaKey;


  constructor(public navCtrl: NavController, public db: AngularFireDatabase, private fb: FormBuilder) {

    this.pessoasRef = this.db.list('/pessoas');
    this.pessoas = this.pessoasRef.snapshotChanges().map(changes => {
      console.log(changes);
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.editPessoaForm = this.fb.group(
      {
        nome: ['', Validators.required],
        sobrenome: ['', Validators.required],
        idade: ['', Validators.required]
      }
    )

  }


  toggleEditPessoaForm(pessoaKey) {
    this.isEditVisible = !this.isEditVisible;
    this.pessoaKey = pessoaKey;
  }

  pushPessoaToList(nome: string, sobrenome: string, idade: string) {
    this.pessoasRef.push(
      {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
      }
    )
      .then(_ => console.log('Nova Pessoa Adicionada!'))
    // .catch(err => console.log(err, 'Sem permissao!'));
  }

  updatePessoa(pessoaKey: string, nome: string, sobrenome: string, idade: string) {
    this.pessoasRef.set(pessoaKey,
      {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
      })
      .then(_ => {console.log('Single Item Set Successfully'); 
      this.isEditVisible = !this.isEditVisible})
      .catch(err => console.log(err, 'You do not have access to Set!'));
  }

  removePessoa(pessoaKey: string) {
    this.pessoasRef.remove(pessoaKey)
      .then(_ => console.log('Single Item Removed Successfully'))
      .catch(err => console.log(err, 'You do not have access to Remove!'));
  }

  removeAll() {
    this.pessoasRef.remove()
      .then(_ => console.log('All Items Removed Successfully'))
      .catch(err => console.log(err, 'You do not have access to Remove!'));
  }

}
