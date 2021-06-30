// THIS FILE IS GENERATED. DO NOT ALTER. EDIT THE CONTENTS IN src\site\blog\page.js
const singleBlogPost = (post) => {
  return `<h1>${post.title}</h1>
  <div class="content">
  ${post.body
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join("\n")}
  </div>`;
};

const blogPost = (post) => {
  return `<div class="col mb-4">
  <div class="card h-100">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">
        ${post.body.slice(0, 150)}...
      </p>
      <a href="?p=${post.slug}" class="btn rainbow-5 mt-auto">Read it here</a>
    </div>
  </div>
</div>`;
};

const posts = {
  "blog-post-1": {
    slug: "blog-post-1",
    title: "blog post 1",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies elit in neque luctus, quis feugiat nisl scelerisque. Sed et ligula at est facilisis aliquet vitae id lectus. Morbi eget varius velit. Curabitur massa neque, lobortis vitae cursus eu, varius nec tellus. Mauris neque odio, ultrices sed sagittis vel, tincidunt ac eros. Integer vitae vehicula diam. Curabitur posuere sit amet lacus vel sagittis. Duis scelerisque eu nunc sit amet pellentesque. Nunc iaculis vehicula mauris, ut fermentum tellus sagittis et. Curabitur at nibh erat. Proin mattis eu purus quis pulvinar. Morbi varius faucibus odio, eget pellentesque nisl blandit nec. Vestibulum sapien ipsum, sagittis eu vulputate et, accumsan vitae ipsum. Suspendisse potenti. Sed interdum nisi interdum, semper urna vitae, dapibus arcu. Etiam accumsan risus augue, eget cursus turpis mollis eget.

Sed at lacus in diam mattis porta efficitur pharetra elit. Nulla vel felis id erat sollicitudin dignissim. In aliquet, metus eu sagittis laoreet, tellus nibh pulvinar dui, et dapibus tortor ante eu massa. Sed maximus ornare erat vel semper. Pellentesque ipsum orci, congue eu metus sed, tincidunt feugiat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida odio et felis malesuada porttitor. Etiam at mauris ac ex consequat convallis. Mauris diam risus, lobortis ac nisi sit amet, faucibus rutrum tellus. Duis sit amet luctus dui. Nam et ex a nibh varius feugiat quis et risus. Praesent mattis, sem vitae venenatis blandit, felis eros interdum erat, gravida varius elit quam in dui. Nullam ac mi nunc.

Nullam sit amet vulputate mi. Sed a molestie turpis. Nullam arcu est, lacinia quis mi rutrum, hendrerit vehicula nisl. Vestibulum justo orci, sodales eu felis pulvinar, blandit sagittis tortor. Praesent posuere tortor et urna fermentum, sed pharetra massa auctor. Curabitur fringilla sodales venenatis. Sed ac finibus orci. Aliquam at velit a ex mollis pretium sed a mauris. Ut porta eleifend imperdiet. Curabitur sem erat, vulputate a ultricies in, suscipit quis diam. Donec eget egestas sapien, ullamcorper consectetur turpis. Sed non velit a neque pulvinar porttitor. Phasellus in interdum eros, elementum tempus massa. Nulla at tempus massa. Fusce ultrices ligula dolor, et convallis dui condimentum quis. Ut consequat rutrum diam eget efficitur.

Phasellus nec vehicula ex. Integer tincidunt est nec odio imperdiet mollis. Fusce ac venenatis diam, non aliquet ligula. Vivamus feugiat laoreet metus, a imperdiet risus mollis vitae. Donec non ultrices lorem, a eleifend diam. Ut at sem velit. Quisque libero nisl, ornare vitae luctus ac, tincidunt in ante. Vivamus et libero in neque maximus ultrices at in lorem. Ut sollicitudin vulputate lacus id dapibus. Nullam felis nisi, vestibulum ac tincidunt vitae, laoreet vel tortor. Proin fermentum finibus mauris vel fringilla. Integer vel gravida nunc.

Integer eget est accumsan, porttitor tortor ut, finibus ligula. Etiam molestie posuere quam. Proin congue turpis ac lacus finibus facilisis. Nam auctor vestibulum tortor, et semper quam lacinia a. Nulla elementum sapien eget justo maximus eleifend. Curabitur tortor mauris, tincidunt nec accumsan sed, vulputate nec ex. Sed sagittis enim nunc, et tempor libero egestas sed. `,
  },
  "blog-post-2": {
    slug: "blog-post-2",
    title: "blog post 2",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies elit in neque luctus, quis feugiat nisl scelerisque. Sed et ligula at est facilisis aliquet vitae id lectus. Morbi eget varius velit. Curabitur massa neque, lobortis vitae cursus eu, varius nec tellus. Mauris neque odio, ultrices sed sagittis vel, tincidunt ac eros. Integer vitae vehicula diam. Curabitur posuere sit amet lacus vel sagittis. Duis scelerisque eu nunc sit amet pellentesque. Nunc iaculis vehicula mauris, ut fermentum tellus sagittis et. Curabitur at nibh erat. Proin mattis eu purus quis pulvinar. Morbi varius faucibus odio, eget pellentesque nisl blandit nec. Vestibulum sapien ipsum, sagittis eu vulputate et, accumsan vitae ipsum. Suspendisse potenti. Sed interdum nisi interdum, semper urna vitae, dapibus arcu. Etiam accumsan risus augue, eget cursus turpis mollis eget.

Sed at lacus in diam mattis porta efficitur pharetra elit. Nulla vel felis id erat sollicitudin dignissim. In aliquet, metus eu sagittis laoreet, tellus nibh pulvinar dui, et dapibus tortor ante eu massa. Sed maximus ornare erat vel semper. Pellentesque ipsum orci, congue eu metus sed, tincidunt feugiat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida odio et felis malesuada porttitor. Etiam at mauris ac ex consequat convallis. Mauris diam risus, lobortis ac nisi sit amet, faucibus rutrum tellus. Duis sit amet luctus dui. Nam et ex a nibh varius feugiat quis et risus. Praesent mattis, sem vitae venenatis blandit, felis eros interdum erat, gravida varius elit quam in dui. Nullam ac mi nunc.

Nullam sit amet vulputate mi. Sed a molestie turpis. Nullam arcu est, lacinia quis mi rutrum, hendrerit vehicula nisl. Vestibulum justo orci, sodales eu felis pulvinar, blandit sagittis tortor. Praesent posuere tortor et urna fermentum, sed pharetra massa auctor. Curabitur fringilla sodales venenatis. Sed ac finibus orci. Aliquam at velit a ex mollis pretium sed a mauris. Ut porta eleifend imperdiet. Curabitur sem erat, vulputate a ultricies in, suscipit quis diam. Donec eget egestas sapien, ullamcorper consectetur turpis. Sed non velit a neque pulvinar porttitor. Phasellus in interdum eros, elementum tempus massa. Nulla at tempus massa. Fusce ultrices ligula dolor, et convallis dui condimentum quis. Ut consequat rutrum diam eget efficitur.

Phasellus nec vehicula ex. Integer tincidunt est nec odio imperdiet mollis. Fusce ac venenatis diam, non aliquet ligula. Vivamus feugiat laoreet metus, a imperdiet risus mollis vitae. Donec non ultrices lorem, a eleifend diam. Ut at sem velit. Quisque libero nisl, ornare vitae luctus ac, tincidunt in ante. Vivamus et libero in neque maximus ultrices at in lorem. Ut sollicitudin vulputate lacus id dapibus. Nullam felis nisi, vestibulum ac tincidunt vitae, laoreet vel tortor. Proin fermentum finibus mauris vel fringilla. Integer vel gravida nunc.

Integer eget est accumsan, porttitor tortor ut, finibus ligula. Etiam molestie posuere quam. Proin congue turpis ac lacus finibus facilisis. Nam auctor vestibulum tortor, et semper quam lacinia a. Nulla elementum sapien eget justo maximus eleifend. Curabitur tortor mauris, tincidunt nec accumsan sed, vulputate nec ex. Sed sagittis enim nunc, et tempor libero egestas sed. `,
  },
  "blog-post-3": {
    slug: "blog-post-3",
    title: "blog post 3",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies elit in neque luctus, quis feugiat nisl scelerisque. Sed et ligula at est facilisis aliquet vitae id lectus. Morbi eget varius velit. Curabitur massa neque, lobortis vitae cursus eu, varius nec tellus. Mauris neque odio, ultrices sed sagittis vel, tincidunt ac eros. Integer vitae vehicula diam. Curabitur posuere sit amet lacus vel sagittis. Duis scelerisque eu nunc sit amet pellentesque. Nunc iaculis vehicula mauris, ut fermentum tellus sagittis et. Curabitur at nibh erat. Proin mattis eu purus quis pulvinar. Morbi varius faucibus odio, eget pellentesque nisl blandit nec. Vestibulum sapien ipsum, sagittis eu vulputate et, accumsan vitae ipsum. Suspendisse potenti. Sed interdum nisi interdum, semper urna vitae, dapibus arcu. Etiam accumsan risus augue, eget cursus turpis mollis eget.

Sed at lacus in diam mattis porta efficitur pharetra elit. Nulla vel felis id erat sollicitudin dignissim. In aliquet, metus eu sagittis laoreet, tellus nibh pulvinar dui, et dapibus tortor ante eu massa. Sed maximus ornare erat vel semper. Pellentesque ipsum orci, congue eu metus sed, tincidunt feugiat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida odio et felis malesuada porttitor. Etiam at mauris ac ex consequat convallis. Mauris diam risus, lobortis ac nisi sit amet, faucibus rutrum tellus. Duis sit amet luctus dui. Nam et ex a nibh varius feugiat quis et risus. Praesent mattis, sem vitae venenatis blandit, felis eros interdum erat, gravida varius elit quam in dui. Nullam ac mi nunc.

Nullam sit amet vulputate mi. Sed a molestie turpis. Nullam arcu est, lacinia quis mi rutrum, hendrerit vehicula nisl. Vestibulum justo orci, sodales eu felis pulvinar, blandit sagittis tortor. Praesent posuere tortor et urna fermentum, sed pharetra massa auctor. Curabitur fringilla sodales venenatis. Sed ac finibus orci. Aliquam at velit a ex mollis pretium sed a mauris. Ut porta eleifend imperdiet. Curabitur sem erat, vulputate a ultricies in, suscipit quis diam. Donec eget egestas sapien, ullamcorper consectetur turpis. Sed non velit a neque pulvinar porttitor. Phasellus in interdum eros, elementum tempus massa. Nulla at tempus massa. Fusce ultrices ligula dolor, et convallis dui condimentum quis. Ut consequat rutrum diam eget efficitur.

Phasellus nec vehicula ex. Integer tincidunt est nec odio imperdiet mollis. Fusce ac venenatis diam, non aliquet ligula. Vivamus feugiat laoreet metus, a imperdiet risus mollis vitae. Donec non ultrices lorem, a eleifend diam. Ut at sem velit. Quisque libero nisl, ornare vitae luctus ac, tincidunt in ante. Vivamus et libero in neque maximus ultrices at in lorem. Ut sollicitudin vulputate lacus id dapibus. Nullam felis nisi, vestibulum ac tincidunt vitae, laoreet vel tortor. Proin fermentum finibus mauris vel fringilla. Integer vel gravida nunc.

Integer eget est accumsan, porttitor tortor ut, finibus ligula. Etiam molestie posuere quam. Proin congue turpis ac lacus finibus facilisis. Nam auctor vestibulum tortor, et semper quam lacinia a. Nulla elementum sapien eget justo maximus eleifend. Curabitur tortor mauris, tincidunt nec accumsan sed, vulputate nec ex. Sed sagittis enim nunc, et tempor libero egestas sed. `,
  },
};

const blogEl = document.getElementById("blog");

const postSlug = new URL(document.location).searchParams.get("p");
if (postSlug === null) {
  blogEl.innerHTML = Object.values(posts).map(blogPost).join("\n");
} else {
  const post = posts[postSlug];
  blogEl.innerHTML = singleBlogPost(post);
}
