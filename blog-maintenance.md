# Blog maintenance

We use the built-in [blog plugin](https://squidfunk.github.io/mkdocs-material/plugins/blog/)
to record our Changelog and Technical Notes.

## Author list

If you want to be included as an author on a post, add a block for yourself to the
[author list](./docs/blog/.authors.yml).

``` yaml
authors:
  <author>:
    name: string        # Author name
    description: string # Author description
    avatar: url         # Author avatar
    url: url            # Author website URL
```

By convention, we use our Github usernames for the `<author>` identifier. Feel free
to use anything memorable, as long as it's unique.

## Changelog

Use the example below to create a new changelog post:

- Copy the example text into a new file in the changelog directory with the appropriate
date in the filename
- Update the date and author in the post metadata. Authorship is optional. The date
[metadata](https://squidfunk.github.io/mkdocs-material/plugins/blog/#meta.date-update-date)
also accepts an `updated` parameter.
- Update the links to the prior and latest releases in the post title
- Refer to the relevant release notes to collect all the changes and sort them into
sections:
    - `Added` for new features.
    - `Changed` for changes in existing functionality.
    - `Deprecated` for soon-to-be removed features.
    - `Removed` for now removed features.
    - `Fixed` for any bug fixes.
    - `Security` in case of vulnerabilities. This section is optional.
- As necessity/interest/time permits, feel free to write short explanations of certain
changes. If the explanation requires more than a paragraph, expand it into a Technical
Note on a separate post and add a link to that.

`docs/blog/posts/changelog/20250228-changelog.md`

``` md
---
date:
  created: 2025-02-28
categories:
  - Changelog
---

# Changelog: [1.0.0](https://github.com/UCL-ARC/condenser-mkdocs/releases/tag/1.0.0) - [1.1.1](https://github.com/UCL-ARC/condenser-mkdocs/releases/tag/1.1.1)

## Added

- 1.1.0: Added a page to the Developer Guide about [deploying resources with `kubectl`](../../../developer_guide/deploying_resources/deploying_kubernetes.md).
- 1.1.1: Enabled the search bar feature that's built-in to the Material theme.

## Changed

- 1.1.1: Added text to the [Terms and Conditions](../../../terms_and_conditions.md)
to clarify that Condenser is not currently suitable for sensitive data.

## Deprecated

Nothing was deprecated.

## Removed

Nothing was removed.

## Fixed

- 1.1.0: Fixed the GitHub actions that automatically tag and release the documentation.

## Security

No security incidents were noted.

```

## Technical Notes

Technical Notes are free-form posts to explain interesting changes or to discuss
interesting features we build, especially when they don't have a place in the user-facing
documentation.

`docs/blog/posts/technical-notes/20250301-deploying-foobar.md`

``` md
---
date:
  created: 2025-03-01
categories:
  - Technical Notes
authors:
  - cdkharris
---

# Deploying foobar

This is a longer technical note about deploying the foobar app on Condenser.

```
