/*
Projeto simples de uma lista de contatos  básica em typescript */

interface Contact {
    name: string;
    email: string;
    phone: string;
  }
  
  class ContactList {
    private contacts: Contact[] = [];
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }
  
    removeContact(index: number): void {
      this.contacts.splice(index, 1);
    }
  
    displayContacts(): void {
      console.log("Lista de contatos:");
      if (this.contacts.length === 0) {
        console.log("Nenhum contato encontrado.");
      } else {
        this.contacts.forEach((contact, index) => {
          console.log(`${index + 1}. Nome: ${contact.name}, Email: ${contact.email}, Telefone: ${contact.phone}`);
        });
      }
    }
  }
  
  const contactList = new ContactList();
  
  function addContact(): void {
    const name = prompt("Digite o nome do contato:");
    const email = prompt("Digite o email do contato:");
    const phone = prompt("Digite o telefone do contato:");
  
    if (name && email && phone) {
      contactList.addContact({ name, email, phone });
      console.log("Contato adicionado com sucesso!");
    } else {
      console.log("Por favor, preencha todos os campos corretamente.");
    }
  }
  
  function removeContact(): void {
    const index = prompt("Digite o número do contato que deseja excluir:");
  
    if (index) {
      const parsedIndex = parseInt(index, 10);
      if (!isNaN(parsedIndex) && parsedIndex >= 1 && parsedIndex <= contactList.length) {
        contactList.removeContact(parsedIndex - 1);
        console.log("Contato removido com sucesso!");
      } else {
        console.log("Número de contato inválido. Certifique-se de inserir um número válido.");
      }
    } else {
      console.log("Por favor, digite um número de contato.");
    }
  }
  
  function displayContacts(): void {
    contactList.displayContacts();
  }
  
  while (true) {
    const choice = prompt(
      "Escolha uma opção:\n1. Adicionar contato\n2. Remover contato\n3. Visualizar contatos\n4. Sair"
    );
  
    switch (choice) {
      case "1":
        addContact();
        break;
      case "2":
        removeContact();
        break;
      case "3":
        displayContacts();
        break;
      case "4":
        console.log("Saindo do programa. Até logo!");
        return; // Usar "return" para sair do loop while
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }