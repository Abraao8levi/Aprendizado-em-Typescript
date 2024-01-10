// Projeto  simples  de um carrinho de compras  em supermercado

interface Product {
    name: string;
    price: number;
  }
  
  interface CartItem {
    product: Product;
    quantity: number;
  }
  
  class ShoppingCart {
    private items: CartItem[] = [];
  
    addItem(product: Product, quantity: number = 1): void {
      const existingItem = this.items.find(item => item.product.name === product.name);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }
    }
  
    removeItem(product: Product, quantity: number = 1): void {
      const existingItem = this.items.find(item => item.product.name === product.name);
  
      if (existingItem) {
        if (existingItem.quantity > quantity) {
          existingItem.quantity -= quantity;
        } else {
          this.items = this.items.filter(item => item !== existingItem);
        }
      }
    }
  
    getItems(): CartItem[] {
      return this.items;
    }
  
    getTotal(): number {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  }
  
  const cart = new ShoppingCart();
  const apple = { name: "Apple", price: 0.5 };
  const banana = { name: "Banana", price: 0.25 };
  
  cart.addItem(apple);
  cart.addItem(banana, 2);
  console.log(cart.getItems()); // [{ product: { name: 'Apple', price: 0.5 }, quantity: 1 }, { product: { name: 'Banana', price: 0.25 }, quantity: 2 }]
  console.log(cart.getTotal()); // 1
  
  cart.removeItem(banana);
  console.log(cart.getItems()); // [{ product: { name: 'Apple', price: 0.5 }, quantity: 1 }]
  console.log(cart.getTotal()); // 0.5
  