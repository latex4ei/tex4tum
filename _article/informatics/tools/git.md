---
title: Git
---

Git is an open-source version control system.
It is used to manage a set of files, as they change over time. 


## Concepts

https://www.sbf5.com/~cduan/technical/git/


Repository: 
It is stored in the same directory as the project itself, in a subdirectory called `.git`.



Working Directory: simply the files

### Commit Object
A Commit Object is a set files. 
It can be referred by its partial or full SHA1 name or relative to a head. The postfix `^` refers to the parent of a head.


Head: simply a named reference to a commit object. By default, there is a head in every repository called *master*.


### Branch:

### Index
The index (= Stage = Cache) 

### Tag
Tags are pointers to a certain commit. They use a name which is more memorizeable than the hash of the commit.






## Commands

| Command | Description |
|---|---|
| `git init` | creates a new repository in the current directory |



| Changes | |
|---|---|
| `git status` | lists modified and untracked files |
| `git diff HEAD` | shows changes between working dir and HEAD |

### Undo local changes
To undo local changes use `git checkout -- <FILE>`. If `<FILE>` is already staged (happens if you do `git add`), you can use `git reset HEAD <FILE>` and then `git checkout -- <FILE>`


### Link code lines in issues
* view file, click on start line number 
* hold shift, click on end line
* press `y` to create permanent URL (hash)




