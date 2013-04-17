# Xortable

jQuery plugin for sortable horiztonal lists. Fast, light-weight (3kb), and horizontal.

## Install

```
bower install xortable
```

Include script after the jQuery library (unless you are packaging scripts somehow else):

```
<script src="path/to/scripts/components/xortable/jquery.xortable.js"></script>
```

## Usage

Basic usage to get up and running

**HTML**

```
<ul class="tabs">
  <li>Tab 1</li>
  <li>Tab 2</li>
  <li>Tab 3</li>
</ul>
```

**Javascript**

```javascript
$('.tabs').xortable();
```

At this point, all the the ` li ` elements will be sortable on the "x" axis (a.k.a. - horiztonally).

**With Options**

```javascript
$('.tabs').xortable({
  dragStart: function ($tab) {
    //
  },
  dragEnd: function ($tab) {
    //
  }
});
```

## Xortable Options

### dragStart

Callback function each time an item starts to be dragged. The callback function is provided the tab in action as the first argument.

```javascript
dragStart: function ($tab) {
  // $tab is a the tab in action as a jQuery object
}
```

### dragEnd

Callback function each time an item has been dragged and dropped. The callback function is provided the tab in action as the first argument.

```javascript
dragEnd: function ($tab) {
  // $tab is a the tab in action as a jQuery object
}
```
