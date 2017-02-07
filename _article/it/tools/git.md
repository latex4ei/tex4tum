---
title: Git
---

Git is an open-source version control system.

Working Directory: simply the files 
HEAD: the 
index: 


## Commands

| Changes | |
|---|---|
| `git status` | lists modified and untracked files |
| `git diff HEAD` | shows changes between working dir and HEAD |


### Undo local changes
To undo local changes use `git checkout -- <FILE>`. If `<FILE>` is already staged (happens if you do `git add`), you can use `git reset HEAD <FILE>` and then `git checkout -- <FILE>`


