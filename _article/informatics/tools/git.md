---
title: Git
---

Git is an open-source version control system.
It is used to manage a set of files, as they change over time. 


## Terms

* **Working Directory:** simply the files in the root folder
* **Commit:** A certain version of the files
* **Tag**: a named pointer to a certain commit.
* **Branch:** A chain of commits 
* **Master:** Default Branch
* **Head:** a named pointer to the current branch

Repository: 
It is stored in the same directory as the project itself, in a subdirectory called `.git`.




### Commit Object
A Commit Object is a set files. 
It can be referred by its partial or full SHA1 name or relative to a head. The postfix `^` refers to the parent of a head.


Head: simply a named reference to a commit object. By default, there is a head in every repository called *master*.


### Branch:

### Index
The index (= Stage = Cache) 

### Tag
Tags are pointers to a certain commit. They use a name which is more memorizeable than the hash of the commit.






## Creating and Cloning
There are two ways to create a repository:

1. **Online**: You create the repository on the website (e.g. github.com) and afterwads clone the empty repository with `git clone git://...` 
1. **Offline**: You create a new repository in the current directory with  `git init`



## Diagnose and Information

| Changes | |
|---|---|
| `git status` | lists modified and untracked files |
| `git diff HEAD` | shows changes between working dir and HEAD |





## Commiting Changes

### Merge master into feature branch
```
git fetch origin master:master
git rebase master
git push -f
```

### Link code lines in issues
* view file, click on start line number 
* hold shift, click on end line
* press `y` to create permanent URL (hash)






## Repairing and Restoring


### Undo changes

* **Local changes:** To undo local changes use `git checkout -- <FILE>`. If `<FILE>` is already staged (happens if you do `git add`), you can use `git reset HEAD <FILE>` and then `git checkout -- <FILE>`
* **Commit staging:** If you want to undo the `commit` command meaning you move changes back to staging (still there but uncommited), use `git reset --soft HEAD^`.
* **Committed changes:** If you already commited changes but you want to reset all changes to the version of the `origin`, you can use `git reset --hard origin/master`


### Recover deleted files

* **Local deletes**: You can view delted files with `git ls-files --deleted`. Afterwards you can recover delted files with `git checkout -- <FILE>`
* **Committed deletes**: If the deletion has been committed, find the commit where it happened, then recover the file from this commit.
```
git rev-list -n 1 HEAD -- <file>
git checkout <commit>^ -- <file>
```


## Testing and Merging Pull Requests
To checkout a pull request (e.g. #37) locally for testing it, run
```
git fetch origin pull/37/head:pr37
git checkout pr37
```



