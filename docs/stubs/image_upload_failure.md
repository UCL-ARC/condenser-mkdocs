---
title: Deleting a failed image upload
---

You may get into a situation where an image upload fails or get stuck, but a subsequent upload succeeds. If the display name of a successful image upload is the same as the failed one, Harvester gets into a 'Deadlocked' state - linking both failed and successful uploads to the same image.

In this case, you need to remove the successful image. Then the failed image will also disappear.

## Where a successful OS image download is already being used in a VMI (Virtual Machine Instance)

If you are using the successful image in a virtual machine (while the failed one is still showing in the Harvester interface), you will need to delete the VMIs that are using that image. You will get an error message stating that the OS image is being used when you try to delete the image:

```
admission webhook "validator.harvesterhci.io" denied the request: Cannot delete image harvester-public/ubuntu2204: being used by volume test-ns/gpu-test-iac-1-disk-0-gwmgl
```

Here, the Harvester admission controller is preventing the deletion, since the image is being used. In this case the `ubuntu2204` image is being used by the root disk of the `gpu-test-iac-1` VMI.
