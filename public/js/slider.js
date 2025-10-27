var product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Life',
    price:1000,
    description:' Life Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, hic harum. Dicta laboriosam amet autem ipsam nostrum eos tempora illo esse reiciendis sapiente fuga, blanditiis nulla id asperiores tempore temporibus.',
    type:'shirt'
}, {
    id:2,
    img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Jumpman',
    price:1200,
    description:'Adidas shirt Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, hic harum. Dicta laboriosam amet autem ipsam nostrum eos tempora illo esse reiciendis sapiente fuga, blanditiis nulla id asperiores tempore temporibus.',
    type:'shirt'
}, {
    id:3,
    img:'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Twill',
    price:1000,
    description:'Air force shoe shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, hic harum. Dicta laboriosam amet autem ipsam nostrum eos tempora illo esse reiciendis sapiente fuga, blanditiis nulla id asperiores tempore temporibus.',
    type:'pant'
}, {
    id:4,
    img:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Cotton',
    price:1300,
    description:'550 shoe shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, hic harum. Dicta laboriosam amet autem ipsam nostrum eos tempora illo esse reiciendis sapiente fuga, blanditiis nulla id asperiores tempore temporibus.',
    type:'pant'
}, {
    id:5,
    img:'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Victum',
    price:800,
    description:'Victum shoe shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, hic harum. Dicta laboriosam amet autem ipsam nostrum eos tempora illo esse reiciendis sapiente fuga, blanditiis nulla id asperiores tempore temporibus.',
    type:'hat'
}, {
    id:6,
    img:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Gold and Silver',
    price:600,
    description:'Gold and Silver shoe shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, hic harum. Dicta laboriosam amet autem ipsam nostrum eos tempora illo esse reiciendis sapiente fuga, blanditiis nulla id asperiores tempore temporibus.',
    type:'hat'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) { 
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img"
                    src="${product[i].img}"
                    alt="${product[i].name}">
                    <p class="headnp">${product[i].name}</p>
                    <p class="footnp">${numberWithCommas(product[i].price)} THB</p>
                </div>`;
    }
    $("#productlist").html(html);
})



function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem){
    console.log(elem.id)
    var value =  $('#' + elem.id).val()
    var html = '';
    for (let i = 0; i < product.length; i++) { 
        if(product[i].name.includes(value) ){
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
            <img class="product-img"
            src="${product[i].img}"
            alt="${product[i].name}">
            <p class="headnp">${product[i].name}</p>
            <p class="footnp">${numberWithCommas(product[i].price)} THB</p>
        </div>`;
        }
    }
    if( html ==''){
        $("#productlist").html(`<p>Not found product</p>`);
    }else{
        $("#productlist").html(html);
    }
}

function searchproduct(param){
    $(".product-items").css('display','none')
    if(param =='all'){
        $(".product-items").css('display','block')
    }
    else if(param == 'pant'){
        $("."+param).css('display','block')
    }
    else if(param == 'shirt'){
        $("."+param).css('display','block')
    }
    else if(param == 'hat'){
        $("."+param).css('display','block')
    }
    else if(param == 'bag'){
        $("."+param).css('display','block')
    }
    else if(param == 'necklace'){
        $("."+param).css('display','block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    $("#modelDesc").css('display', 'flex');
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name);
    $("#mdd-price").text(numberWithCommas(product[index].price) + " THB");
    $("#mdd-desc").text(product[index].description);

    // เพิ่มการตรวจสอบประเภทของสินค้าก่อนแสดงรายละเอียด
    if (product[index].type === 'shirt') {
        // เพิ่มข้อมูลเกี่ยวกับไซส์ของเสื้อ
        var shirtSizes = ['S', 'M', 'L', 'XL']; // สมมติว่าเป็นไซส์เสื้อที่มีไซส์ S, M, L, XL
        var sizeHTML = '<div class="shirt-sizes"><p>Available Sizes:</p><ul>';
        shirtSizes.forEach(size => {
            sizeHTML += `<li><button class="btnsize" onclick="addToCartWithSize(${index}, '${size}')">${size}</button></li>`;
        });
        sizeHTML += '</ul></div>';
        // เพิ่ม HTML ลงในรายละเอียดสินค้า
        $("#mdd-desc").append(sizeHTML);
    } else if (product[index].type === 'pant') { // เพิ่มเงื่อนไขสำหรับสินค้าประเภทกางเกง
        // เพิ่มข้อมูลเกี่ยวกับไซส์ของกางเกง
        var pantSizes = ['S', 'M', 'L', 'XL']; // สมมติว่าเป็นไซส์กางเกงที่มีไซส์ S, M, L, XL
        var sizeHTML = '<div class="pant-sizes"><p>Available Sizes:</p><ul>';
        pantSizes.forEach(size => {
            sizeHTML += `<li><button class="btnsize" onclick="addToCartWithSize(${index}, '${size}')">${size}</button></li>`;
        });
        sizeHTML += '</ul></div>';
        // เพิ่ม HTML ลงในรายละเอียดสินค้า
        $("#mdd-desc").append(sizeHTML);
    }
}


function addToCartWithSize(index, size) {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if (productindex === cart[i].index && cart[i].size === size) {
            cart[i].count++;
            pass = false;
        }
    }

    if (pass) {
        var obj = {
            index: index,
            id: product[index].id,
            name: product[index].name,
            price: product[index].price,
            img: product[index].img,
            count: 1,
            size: size // เพิ่มข้อมูลขนาดของกางเกง
        };
        cart.push(obj);
    }

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[index].name + ' (' + size + ') to cart!'
    })
    $("#cartcount").css('display', 'flex').text(cart.length);
}


function closeModel(){
    $(".model").css('display','none')
}
var cart = [];
function addtocart(){
    var pass = true;

    for(let i = 0; i < cart.length; i++){
        if(productindex === cart[i].index){
            cart[i].count++;
            pass = false;
        }
    }

    if(pass){
        var obj = {
            index:productindex,
            id:product[productindex].id,
            name:product[productindex].name,
            price:product[productindex].price,
            img:product[productindex].img,
            count:1
        };
        cart.push(obj);   
    }

    Swal.fire({
        icon:'success',
        title:'Add '+product[productindex].name +' to cart!'
    })
    $("#cartcount").css('display','flex').text(cart.length);
}

function opencart(){
    $("#modelCart").css('display','flex')
    rendercart(); 
}

function rendercart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="${cart[i].name}">
                            <div class="cartlist-detail">
                                <p class="cartpd">${cart[i].name}</p>
                                <p class="cartpri">${numberWithCommas(cart[i].price * cart[i].count)} THB</p>
                                <p class="cartsize">Size: ${cart[i].size}</p> <!-- เพิ่มข้อมูลไซส์ของเสื้อ -->
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-',${i})" class="btnc">-</p>
                            <p id="countitems${i}" class="countinc">${cart[i].count}</p>
                            <p onclick="deinitems('+',${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html);
    } else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}


function deinitems(action, index){
    if(action == '-'){
        if(cart[index].count > 0){
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)
            
            if(cart[index].count <= 0){
                Swal.fire({
                    icon:'warning',
                    title:'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText:'Delete',
                    cancelButtonText:'Cancel'
                }).then((res) =>{
                    if(res.isConfirmed){
                        cart.splice(index,1)
                        rendercart();
                        $("#cartcount").css('display','flex').text(cart.length);
                        if(cart.length<=0){
                        $("#cartcount").css('display','none') 
                        }
                    }
                   else{
                        cart[index].count++;
                        $("#countitems"+index).text(cart[index].count);
                        rendercart();
                   } 
                })
            }
        }
        rendercart();
    }
    else if(action == '+'){
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count);
        rendercart();
    }
}
