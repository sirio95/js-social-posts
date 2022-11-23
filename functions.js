//create element functions

function createDivClass(parent, classe, content){
    let newEl= document.createElement("div");
    newEl.classList.add(classe);
    newEl.innerHTML += `${content}`;
    parent.innerHTML += `${newEl}`;
}

function createImgClass (parent, src, classe){
    let newEl= document.createElement("img");
    newEl.classList(classe);
    newEl.src= src;
    parent.innerHTML += `${newEl}`}

//header/text/footer dei posts

function createHeader(post, img_src, author_name, content_time){

    let post__header= createDivClass(post, "post__header");
    let post_meta= createDivClass(post__header, "post-meta");
    let post_meta_icon= createDivClass(post_meta, "post-meta__icon");
    let icon_img= createImgClass(post_meta_icon, `${img_src}`, "profile-pic");

    let post_meta_data= createDivClass(post__header, "post-meta__data");
    let post_meta_author= createDivClass(post_meta_data, "post-meta__author", author_name);
    let post_meta_time= createDivClass(post_meta_data, "post-meta__time", content_time)
}

function createText(post, img_src){
    let post_text= createDivClass(post, "post__text", `Lorem30`);
    let post_img= createImgClass(post, `${img_src}`, "post__image");

    return post_text, post_img;
}

function createFooter(post, counterLikes){
    let post_footer= createDivClass(post, "post__footer");
    let js_likes= createDivClass(post_footer, "likes js-likes");
    let likes_cta= createDivClass(js_likes, "likes__cta");
    let nonLoRipeto= `<a class="like-button     js-like-button" href="#" data-postid="1">

    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>

    <span class="like-button__label">Mi Piace</span>

    </a>`;
    likes_cta.append(nonLoRipeto);

    let nonLoRipeto_counter= `<div class="likes__counter">
    Piace a <b id="like-counter-1" class="js-likes-counter">${counterLikes}</b> persone
    </div>`;
    js_likes.append(nonLoRipeto_counter);
}

//funzione unica
function tuttiPerUno(container){
    let post= document.createElement("div");
    post.classList.add("post");
    container.append(post);
    
}

