let cart = document.querySelector('.cart');
let cartField = document.querySelector('.cart-field');
let add = document.getElementsByClassName('add');

for(let but of add) {
    but.onclick = e => {
        let item = Number(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', item +1);
        cart.classList.add('on');

        //image animation to cart
        let parent = e.target.parentNode.parentNode;
        let image = parent.querySelector('img');
        let span = document.createElement('span');
        span.className = 'image-animate';
        parent.insertBefore(span ,parent.lastElementChild);

        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout((show) => {
            span.classList.remove('active');
            span.removeChild(s_image);
        },500);

        //copy and paste
        let clone = parent.cloneNode(true);
        clone.querySelector('.add').style.display = "none";
        clone.querySelector('.add').removeAttribute('class');
        cartField.appendChild(clone);

        if(clone) {
            cart.onclick = () => {
                cartField.classList.toggle('display');
            }
        }
    }
}

