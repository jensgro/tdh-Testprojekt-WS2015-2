<form action="" method="get" class="contact-form" id="contact-form">
  <div class="clearfix contact-form__element">
    <label for="subject">
      Was ist Ihr Anliegen?
      <p>
        Wählen Sie bitte aus, worum es Ihnen geht - so finden wir schneller den
        richtigen Ansprechpartner.
      </p>
    </label>
    <select name="subject" id="subject">
      <option value="general">Allgemeines</option>
      <option value="customer">Kundendaten</option>
      <option value="stuff">Stuff</option>
      <option value="test">Test</option>
    </select>
  </div>

  <div class="clearfix contact-form__element">
    <label for="name">Ihr Name*</label>
    <input type="text" required name="name" value="" placeholder="Ihr Name" id="name">
  </div>

  <div class="clearfix contact-form__element">
    <label for="email">Ihre E-Mail Adresse*</label>
    <input type="email" required name="email" value="" placeholder="Ihre E-Mail Adresse" id="email">
  </div>

  <div class="clearfix contact-form__element">
    <label for="message">
      Ihre Nachricht*
      <p>
        Hinterlassen Sie hier auch Ihre Adresse oder Telefonnummer,
        wenn Sie möchten, dass wir telefonisch oder schriftlich mit Ihnen in Kontakt
        treten.
      </p>
    </label>
    <textarea id="message" rows="8" formid="contact-form" required name="message" placeholder="Ihr Anliegen an tdh Murgtal"></textarea>
  </div>

  <div class="clearfix contact-form__element">
    <button type="submit" name="button" class="submit-btn">Nachricht senden</button>
  </div>

</form>
