let progress_div = document.getElementById('progress_counter');
let progress_bar_full = document.getElementById('progress_bar_full');


let progress_counter = 1;

export default function progressBar() {

progress_div.innerText = `${progress_counter} / 10`;
progress_bar_full.style.width = `${(progress_counter / 10) * 100}%`;
return progress_counter++;
}

