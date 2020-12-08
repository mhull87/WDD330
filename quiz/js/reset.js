export default function reset() {
  document.getElementById('curtain').classList.add('hidden');
  document.getElementById('maincontainer').classList.remove('hidden');
  document.getElementById('difficulty').classList.remove('hidden');
  document.getElementById('progress_counter').innerText = `1 / 10`;
  document.getElementById('progress_bar_full').style.width = '10%';
  document.getElementById('progress_container').classList.add('hidden');
  document.getElementById('question').classList.add('hidden');
  document.getElementById('next').innerText = 'Next';
  document.getElementById('btndiv').classList.add('hidden');
}