#create instance

import boto3
ec2 = boto3.resource('ec2')
outfile = open('test.pem','w')

 


key_pair = ec2.create_key_pair(KeyName='test')
KeyPairOut = str(key_pair.key_material)

 

print(KeyPairOut)

 

outfile.write(KeyPairOut)

 

ec2 = boto3.resource('ec2','ap-south-1')
instance = ec2.create_instances(
    ImageId='ami-02913db388613c3e1',
    MinCount=1,
    MaxCount=1,
    InstanceType='t2.micro'

    
)
print(instance[0].id)