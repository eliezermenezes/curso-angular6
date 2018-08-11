import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/models/contact.model';
import { ContactService } from '../contact/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  public ufs = ['AM', 'AC', 'AP', 'SP'];
  public contact: Contact;
  public contatos: Contact[];
  public carregando: boolean;

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.contact = new Contact();
    this.contatos = new Array<Contact>();
    this.getContatos();
  }

  public async onSave() {
    if(this.contact._id !== '' || this.contact._id !== undefined) {
      this.atualizar();
      return;
    }
    this.cadastrar();
  }

  private async cadastrar() {
    try {
      const save = await this.contactService.save(this.contact);
      this.toastr.success('Contato adicionado.', 'Sucesso!');
      this.getContatos();
    } catch(error) {
      this.toastr.error('Não foi possível salvar o contato.', 'Erro!');
    } 
  }

  private async atualizar() {
    try {
      const editar = await this.contactService.edita(this.contact._id, this.contact);
      this.toastr.success('Contato editado.', 'Sucesso!');
      this.getContatos();
    } catch(error) {
      this.toastr.error('Contato não editado.', 'Erro!');
    }
  }

  private async getContatos() {
    this.carregando = true;
    try {      
      this.contatos = await this.contactService.listaContatos();      
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout( () => {
        this.carregando = false;
      }, 500 );
    }
  }

  public async carregarContato(contato: Contact) {
    this.contact = contato;    
  }

  public async delete(id: string) {
    try {
      const deleta = await this.contactService.deleteContato(id);
      this.toastr.success('Contato deletado.', 'Sucesso!');
      this.getContatos();
    } catch(error) {
      this.toastr.error('Contato não deletado.', 'Erro!');
    }
  }
}
