# 🍱 Lunchbox
``Hello ( ´ ω ` )ノﾞ`` Welcome to 🍱 Lunchbox. So... you're into Deno 🦕 Fresh 🍋? Damn, me too. I've found myself using nothing but Fresh for most of my web dev projects. But I'm not that much of a user of existing web component libraries. Even though I respect these, I'm more of a _do-it-yourself_ kind of guy. That is why I created Lunchbox, and I couldn't help creating an opinionated product, it is built to have my dream features.

## Ideas behind the library
Alright, so what are these features? I think that more than listing what can _technically_ be done with this library, the correct way of approaching to describe it is by the core ideas behind its creation. 

### Based on [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)
Shoutout to [Brad Frost](https://bradfrost.com/), thank you for this great piece of work. A popular concept about modularity in design systems is to consider them inherently hierarchical, and in this, I strongly disagree. Atoms are of no less importance than organisms, but I do agree that they have one fundamentally different characteristic. In my interpretation, atom components must not be made of any other component, only HTML elements.

### Trivial HTML good practices
- Component libraries are usually ambiguous about how they handle inner logic, creating the need to _find out how does it do X_.
- For example, some might have only one Input component, and inside it alternates between `<input/>` and `<textarea/>` depending on a hypothetical `numOfLines` prop.
- This means that some components of this library tend to be closer in logic to HTMLElements for maximum flexibility.

### Configure anything easily
- Most components are made of multiple HTML elements, and every one of them can be fully configurable thanks to the universal `fwd` prop.
- Every component and every one of its parts can have a reference forwarded with the universal `fref` prop.
- Every component can have additional classes appended to the ones from the library or they can be removed altogether with the universal prop `nostlye`.

## Installation Guide

## Components

## Utilities

