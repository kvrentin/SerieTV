<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NETFLEX</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:700" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div class="slider">
      <div class="load">
      </div>
      
      <div class="content">
        <div class="principal">
          <h1>NETFLEX</h1>
        </div>

        <form>
          <input type="text" name="pseudo" id="valeur" placeholder="Rechercher une série" onfocus="this.placeholder = ''" onblur= "this.placeholder = 'Rechercher une série'" size="30" maxlength="70" autocomplete="off" />
          <input type="submit" id="ajouter" value="AJOUTER" />
        </form>

        <h2>Ma WatchList</h2>
        <ul id="output">

        </ul>

      </div>
    </div>

    <script src="js/script.js"></script>
  </body>
</html>
