(function () {
  const evt1 = new PointerEvent('pointerdown', { clientX: 150, clientY: 300 });
  const evt2 = new PointerEvent('pointerup', { clientX: 150, clientY: 300 });
  setInterval(
    (function fn() {
      const energy = parseInt(
        document.getElementsByClassName('user-tap-energy')[0].getElementsByTagName('p')[0].textContent.split(' / ')[0]
      );
      if (energy > 100) {
        document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
        document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
      }
      return fn;
    })(),
    100
  );
})();
