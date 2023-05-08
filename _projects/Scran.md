---
layout: page
title: Scran
description: a university team project, creating a food based social media targeted at young people
img: assets/img/scran.png
importance: 1
category: uni
---

This Project was created as part of my university 'Team Project' module. The module description was:

Team Project teaches Agile Development Practices by doing. This is the most industry-relevant module
you will take. Teams will produce a full-stack web-application, using industry-standard development
techniques (Kanban, CI/CD, code reviews, etc.). Some tasks are submitted individually and peer-assessed
by the team

We all came up with ideas on what to develop into a webapp mine being the idea that was chosen:

### Student Food Shop Reviews

-   App where people can input certain items from a variety of shops (e.g. pulled pork from aldi)

-   They can then review it and say what they made with it upload all the macros etc

-   Help people spot sales in local shops etc

-   Gradually build up a large database of lots of different food items

-   App would then suggest people foods based on their preferences (affordability, taste, halal etc)

-   Acts almost like a social networking tool for students trying to have a healthy but affordable diet

-   Offer discounts in shops as incentive for leaving enough reviews and making posts
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/TeamProjectS1Final1024_1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/TeamProjectS1Final1024_4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center">
        <video src="https://lukehornerlong.live/assets/videos/T18P04-app-demo.mp4" width="640" height="360" controls></video>
    </div>
</div>
<div class="caption">
    Concept video and WebApp Demo
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}
