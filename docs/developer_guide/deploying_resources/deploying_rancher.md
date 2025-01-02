---
title: Deploying with the Rancher GUI
---

# Deploying with the Rancher GUI

1. Enable the UCL ISD VPN: `asa-vpn-isd.ucl.ac.uk`
2. Navigate to the Harvester console for the eng cluster: `https://harvester-eng.condenser.arc.ucl.ac.uk/dashboard`
    1. Log in with Harvester eng admin credentials provided by Environments
3. Create a personal Namespace
    1. From the menu at left, select **Namespaces**
    2. Click **Create** in the upper right
    3. Provide a short name
    4. Click **Create** in the lower right to finish the Namespace
4. Register a SSH Key
    1. On your local computer, generate a SSH key pair
    2. Copy the contents of the public key onto your clipboard
    3. From the menu at left, select **Advanced** > **SSH Keys**
    4. Select your personal Namespace
    5. Enter an appropriate name for the SSH key
    6. Paste the contents of the public key into the **Basics** text box
    7. Click **Create** in the lower right to register the SSH key
5. Launch a Virtual Machine
    1. From the menu at left, select **Virtual Machines**
    2. Click **Create** in the upper right
    3. Select your personal Namespace
    4. Name the VM
    5. In the VM submenu, select **Networks**
    6. Click **Add Network**
    7. For the new Network, add the `default/test-net` Network
    8. In the VM submenu, select **Volumes**
    9. Select the appropriate image (e.g., `harvester-public/rhel-9.2`)
    10. In the VM submenu, select **Basics**
    11. Increase the **CPU** setting to 1
    12. Increase the **Memory** to 4 GiB
    13. Select your SSH Key
    14. Click **Create** in the lower right to launch the VM
        1. Frequently the VM creation form will clear entries even though they
        appear to have been properly configured. This will cause errors to appear
        when you click **Create**. Re-enter them, wait for the **Create** button
        to reappear, and try again. It sometimes helps to focus the cursor out of
        the form fields after you configure a setting.
    15. To save a VM configuration as a template:
        1. From the menu at left, select **Virtual Machines**
        2. Tick the box next to the VM
        3. From the rain menu at right, select **Generate Template** (⋮)
        4. Name the template
        5. To start a VM from a template, omit steps 5.5-5.13. Instead tick the
        **Use VM Template** box and select the appropriate template.
6. Log in to the VM
    1. From the menu at left, select **Virtual Machines**
    2. Identify the VM that you just launched in the list
    3. Copy the IP address associated with the `default/test-net` Network (the
    IP address will begin with 172)
    4. Obtain the `cloud-user@compute081` SSH key provided by Environments and
    register it with your `ssh-agent`.
    5. In your terminal, enter the following SSH command, filling in the
    appropriate fields:

    ```bash
    ssh -i <PATH TO YOUR PERSONAL PRIVATE SSH KEY> -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -o ProxyCommand="ssh -W %h:%p cloud-user@condenser.arc.ucl.ac.uk" \
    cloud-user@<YOUR VMs default/test-net IP ADDRESS>
    ```

7. Terminate a VM
    1. From the menu at left, select **Virtual Machines**
    2. Tick the box next to the VM
    3. Click **Delete** at the top of the table of VMs
