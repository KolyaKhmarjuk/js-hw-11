const e={form:document.querySelector("#search-form"),galerry:document.querySelector(".gallery-list"),loadMore:document.querySelector(".load-more")};const t=new class{fetchData(){fetch(`https://pixabay.com/api/?key=33125527-3d6befa9d5d1f6271bd5a7dac&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&${this.inputValue}per_page=40&page=${this.page}`).then((e=>e.json())).then((e=>{this.page+=1}))}get query(){return this.inputValue}set(e){this.inputValue=e}constructor(){this.inputValue="",this.page=1}};e.form.addEventListener("submit",(async e=>{e.preventDefault(),t.query=e.currentTarget.searchQuery.value,t.fetchData()})),e.loadMore.addEventListener("click",(()=>{t.fetchData()}));
//# sourceMappingURL=index.cb9193c5.js.map
