const express = require("express");
const nunjucks = require("nunjucks");
const server = express();
const contents = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  noCache: true,
  autoescape: true,
});

server.get("/", function (req, res) {
  const home = {
    title: "As melhores receitas",
    content:
      "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
  };
  return res.render("index", { itens: contents, home });
});
server.get("/sobre", function (req, res) {
  const sobre = [
    {
      sobreTitle: "Sobre o Foodfy",
      sobreFoodfy1:
        "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
      sobreFoodfy2:
        "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",
    },
    {
      sobreTitle: "Como tudo começou…",
      sobreFoodfy1:
        "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
      sobreFoodfy2:
        "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",
    },
    {
      sobreTitle: "Nossas receitas",
      sobreFoodfy1:
        "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
    },
  ];
  return res.render("sobre", { sobre });
});
server.get("/receitas", function (req, res) {
  return res.render("receitas", { itens: contents });
});
server.get("/recipes/:index", function (req, res) {
  const recipes = contents;
  const recipeIndex = req.params.index;
  return res.render("recipe", { item: recipes[recipeIndex] });
});

server.listen(5000, function () {
  console.log("server started");
});
