---
title: Failed image upload
---

You may get into a situation where an image upload fails or get stuck - but a subsequent upload succeeds:

![Image upload failure](../assets/image-upload.png)

When you try and delete the 'failed' upload, this also fails:

```
kubectl delete virtualmachineimage <image-id> -n <namespace> <-- will also fail (even if finalizers removed)
```

In this case, you need to remove the successful upload and then the failed one will also disappear.

This is a known 'feature' of Harvester v1.7.1+ - if the display name of a successful image upload is the same as the failed one, Harvester gets into a 'Deadlocked' state - linking both failed and successful uploads to the same image.

# Where a successful OS image download is already being used in a VMI (Virtual Machine Instance)

If you are using the successfully downloaded image in a virtual machine already (where the failed one is still showing in the harvester interface), you will need to delete the vmi instances that are using that image - you will get an error message stating that the OS image is being used by that host when trying to delete it with an error message from harvester:

```
admission webhook "validator.harvesterhci.io" denied the request: Cannot delete image harvester-public/ubuntu2204: being used by volume biomed-cq-ns/gpu-test-iac-1-disk-0-gwmgl
```

Here, the harvester admission controller is preventing the deletion, since the image is being used - in this case ubuntu2204 image is being used by the root disk of the gpu-test-iac-1 vmi.
